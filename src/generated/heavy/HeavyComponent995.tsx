'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly995<T> = T extends (infer U)[]
  ? DeepReadonlyArray995<U>
  : T extends object
  ? DeepReadonlyObject995<T>
  : T;

interface DeepReadonlyArray995<T> extends ReadonlyArray<DeepReadonly995<T>> {}

type DeepReadonlyObject995<T> = {
  readonly [P in keyof T]: DeepReadonly995<T[P]>;
};

type UnionToIntersection995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf995<T> = UnionToIntersection995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push995<T extends unknown[], V> = [...T, V];

type TuplifyUnion995<T, L = LastOf995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push995<TuplifyUnion995<Exclude<T, L>>, L>;

type DeepPartial995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial995<T[P]> }
  : T;

type Paths995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join995<K, Paths995<T[K], Prev995[D]>> : never }[keyof T]
  : never;

type Prev995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig995 {
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

type ConfigPaths995 = Paths995<NestedConfig995>;

interface HeavyProps995 {
  config: DeepPartial995<NestedConfig995>;
  path?: ConfigPaths995;
}

const HeavyComponent995 = memo(function HeavyComponent995({ config }: HeavyProps995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent995.displayName = 'HeavyComponent995';
export default HeavyComponent995;
