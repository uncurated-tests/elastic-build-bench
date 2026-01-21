'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14995<T> = T extends (infer U)[]
  ? DeepReadonlyArray14995<U>
  : T extends object
  ? DeepReadonlyObject14995<T>
  : T;

interface DeepReadonlyArray14995<T> extends ReadonlyArray<DeepReadonly14995<T>> {}

type DeepReadonlyObject14995<T> = {
  readonly [P in keyof T]: DeepReadonly14995<T[P]>;
};

type UnionToIntersection14995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14995<T> = UnionToIntersection14995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14995<T extends unknown[], V> = [...T, V];

type TuplifyUnion14995<T, L = LastOf14995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14995<TuplifyUnion14995<Exclude<T, L>>, L>;

type DeepPartial14995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14995<T[P]> }
  : T;

type Paths14995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14995<K, Paths14995<T[K], Prev14995[D]>> : never }[keyof T]
  : never;

type Prev14995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14995 {
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

type ConfigPaths14995 = Paths14995<NestedConfig14995>;

interface HeavyProps14995 {
  config: DeepPartial14995<NestedConfig14995>;
  path?: ConfigPaths14995;
}

const HeavyComponent14995 = memo(function HeavyComponent14995({ config }: HeavyProps14995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14995.displayName = 'HeavyComponent14995';
export default HeavyComponent14995;
