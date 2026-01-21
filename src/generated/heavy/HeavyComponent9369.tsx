'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9369<T> = T extends (infer U)[]
  ? DeepReadonlyArray9369<U>
  : T extends object
  ? DeepReadonlyObject9369<T>
  : T;

interface DeepReadonlyArray9369<T> extends ReadonlyArray<DeepReadonly9369<T>> {}

type DeepReadonlyObject9369<T> = {
  readonly [P in keyof T]: DeepReadonly9369<T[P]>;
};

type UnionToIntersection9369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9369<T> = UnionToIntersection9369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9369<T extends unknown[], V> = [...T, V];

type TuplifyUnion9369<T, L = LastOf9369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9369<TuplifyUnion9369<Exclude<T, L>>, L>;

type DeepPartial9369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9369<T[P]> }
  : T;

type Paths9369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9369<K, Paths9369<T[K], Prev9369[D]>> : never }[keyof T]
  : never;

type Prev9369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9369 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths9369 = Paths9369<NestedConfig9369>;

interface HeavyProps9369 {
  config: DeepPartial9369<NestedConfig9369>;
  path?: ConfigPaths9369;
}

const HeavyComponent9369 = memo(function HeavyComponent9369({ config }: HeavyProps9369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9369.displayName = 'HeavyComponent9369';
export default HeavyComponent9369;
