'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13896<T> = T extends (infer U)[]
  ? DeepReadonlyArray13896<U>
  : T extends object
  ? DeepReadonlyObject13896<T>
  : T;

interface DeepReadonlyArray13896<T> extends ReadonlyArray<DeepReadonly13896<T>> {}

type DeepReadonlyObject13896<T> = {
  readonly [P in keyof T]: DeepReadonly13896<T[P]>;
};

type UnionToIntersection13896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13896<T> = UnionToIntersection13896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13896<T extends unknown[], V> = [...T, V];

type TuplifyUnion13896<T, L = LastOf13896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13896<TuplifyUnion13896<Exclude<T, L>>, L>;

type DeepPartial13896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13896<T[P]> }
  : T;

type Paths13896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13896<K, Paths13896<T[K], Prev13896[D]>> : never }[keyof T]
  : never;

type Prev13896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13896 {
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

type ConfigPaths13896 = Paths13896<NestedConfig13896>;

interface HeavyProps13896 {
  config: DeepPartial13896<NestedConfig13896>;
  path?: ConfigPaths13896;
}

const HeavyComponent13896 = memo(function HeavyComponent13896({ config }: HeavyProps13896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13896.displayName = 'HeavyComponent13896';
export default HeavyComponent13896;
