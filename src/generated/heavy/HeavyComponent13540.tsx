'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13540<T> = T extends (infer U)[]
  ? DeepReadonlyArray13540<U>
  : T extends object
  ? DeepReadonlyObject13540<T>
  : T;

interface DeepReadonlyArray13540<T> extends ReadonlyArray<DeepReadonly13540<T>> {}

type DeepReadonlyObject13540<T> = {
  readonly [P in keyof T]: DeepReadonly13540<T[P]>;
};

type UnionToIntersection13540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13540<T> = UnionToIntersection13540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13540<T extends unknown[], V> = [...T, V];

type TuplifyUnion13540<T, L = LastOf13540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13540<TuplifyUnion13540<Exclude<T, L>>, L>;

type DeepPartial13540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13540<T[P]> }
  : T;

type Paths13540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13540<K, Paths13540<T[K], Prev13540[D]>> : never }[keyof T]
  : never;

type Prev13540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13540 {
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

type ConfigPaths13540 = Paths13540<NestedConfig13540>;

interface HeavyProps13540 {
  config: DeepPartial13540<NestedConfig13540>;
  path?: ConfigPaths13540;
}

const HeavyComponent13540 = memo(function HeavyComponent13540({ config }: HeavyProps13540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13540.displayName = 'HeavyComponent13540';
export default HeavyComponent13540;
