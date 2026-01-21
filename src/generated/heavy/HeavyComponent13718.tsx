'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13718<T> = T extends (infer U)[]
  ? DeepReadonlyArray13718<U>
  : T extends object
  ? DeepReadonlyObject13718<T>
  : T;

interface DeepReadonlyArray13718<T> extends ReadonlyArray<DeepReadonly13718<T>> {}

type DeepReadonlyObject13718<T> = {
  readonly [P in keyof T]: DeepReadonly13718<T[P]>;
};

type UnionToIntersection13718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13718<T> = UnionToIntersection13718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13718<T extends unknown[], V> = [...T, V];

type TuplifyUnion13718<T, L = LastOf13718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13718<TuplifyUnion13718<Exclude<T, L>>, L>;

type DeepPartial13718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13718<T[P]> }
  : T;

type Paths13718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13718<K, Paths13718<T[K], Prev13718[D]>> : never }[keyof T]
  : never;

type Prev13718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13718 {
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

type ConfigPaths13718 = Paths13718<NestedConfig13718>;

interface HeavyProps13718 {
  config: DeepPartial13718<NestedConfig13718>;
  path?: ConfigPaths13718;
}

const HeavyComponent13718 = memo(function HeavyComponent13718({ config }: HeavyProps13718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13718.displayName = 'HeavyComponent13718';
export default HeavyComponent13718;
