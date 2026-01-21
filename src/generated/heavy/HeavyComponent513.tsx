'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly513<T> = T extends (infer U)[]
  ? DeepReadonlyArray513<U>
  : T extends object
  ? DeepReadonlyObject513<T>
  : T;

interface DeepReadonlyArray513<T> extends ReadonlyArray<DeepReadonly513<T>> {}

type DeepReadonlyObject513<T> = {
  readonly [P in keyof T]: DeepReadonly513<T[P]>;
};

type UnionToIntersection513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf513<T> = UnionToIntersection513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push513<T extends unknown[], V> = [...T, V];

type TuplifyUnion513<T, L = LastOf513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push513<TuplifyUnion513<Exclude<T, L>>, L>;

type DeepPartial513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial513<T[P]> }
  : T;

type Paths513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join513<K, Paths513<T[K], Prev513[D]>> : never }[keyof T]
  : never;

type Prev513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig513 {
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

type ConfigPaths513 = Paths513<NestedConfig513>;

interface HeavyProps513 {
  config: DeepPartial513<NestedConfig513>;
  path?: ConfigPaths513;
}

const HeavyComponent513 = memo(function HeavyComponent513({ config }: HeavyProps513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent513.displayName = 'HeavyComponent513';
export default HeavyComponent513;
