'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9009<T> = T extends (infer U)[]
  ? DeepReadonlyArray9009<U>
  : T extends object
  ? DeepReadonlyObject9009<T>
  : T;

interface DeepReadonlyArray9009<T> extends ReadonlyArray<DeepReadonly9009<T>> {}

type DeepReadonlyObject9009<T> = {
  readonly [P in keyof T]: DeepReadonly9009<T[P]>;
};

type UnionToIntersection9009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9009<T> = UnionToIntersection9009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9009<T extends unknown[], V> = [...T, V];

type TuplifyUnion9009<T, L = LastOf9009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9009<TuplifyUnion9009<Exclude<T, L>>, L>;

type DeepPartial9009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9009<T[P]> }
  : T;

type Paths9009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9009<K, Paths9009<T[K], Prev9009[D]>> : never }[keyof T]
  : never;

type Prev9009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9009 {
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

type ConfigPaths9009 = Paths9009<NestedConfig9009>;

interface HeavyProps9009 {
  config: DeepPartial9009<NestedConfig9009>;
  path?: ConfigPaths9009;
}

const HeavyComponent9009 = memo(function HeavyComponent9009({ config }: HeavyProps9009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9009.displayName = 'HeavyComponent9009';
export default HeavyComponent9009;
