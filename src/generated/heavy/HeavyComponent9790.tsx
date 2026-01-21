'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9790<T> = T extends (infer U)[]
  ? DeepReadonlyArray9790<U>
  : T extends object
  ? DeepReadonlyObject9790<T>
  : T;

interface DeepReadonlyArray9790<T> extends ReadonlyArray<DeepReadonly9790<T>> {}

type DeepReadonlyObject9790<T> = {
  readonly [P in keyof T]: DeepReadonly9790<T[P]>;
};

type UnionToIntersection9790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9790<T> = UnionToIntersection9790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9790<T extends unknown[], V> = [...T, V];

type TuplifyUnion9790<T, L = LastOf9790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9790<TuplifyUnion9790<Exclude<T, L>>, L>;

type DeepPartial9790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9790<T[P]> }
  : T;

type Paths9790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9790<K, Paths9790<T[K], Prev9790[D]>> : never }[keyof T]
  : never;

type Prev9790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9790 {
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

type ConfigPaths9790 = Paths9790<NestedConfig9790>;

interface HeavyProps9790 {
  config: DeepPartial9790<NestedConfig9790>;
  path?: ConfigPaths9790;
}

const HeavyComponent9790 = memo(function HeavyComponent9790({ config }: HeavyProps9790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9790.displayName = 'HeavyComponent9790';
export default HeavyComponent9790;
