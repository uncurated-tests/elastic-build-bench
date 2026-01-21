'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14442<T> = T extends (infer U)[]
  ? DeepReadonlyArray14442<U>
  : T extends object
  ? DeepReadonlyObject14442<T>
  : T;

interface DeepReadonlyArray14442<T> extends ReadonlyArray<DeepReadonly14442<T>> {}

type DeepReadonlyObject14442<T> = {
  readonly [P in keyof T]: DeepReadonly14442<T[P]>;
};

type UnionToIntersection14442<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14442<T> = UnionToIntersection14442<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14442<T extends unknown[], V> = [...T, V];

type TuplifyUnion14442<T, L = LastOf14442<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14442<TuplifyUnion14442<Exclude<T, L>>, L>;

type DeepPartial14442<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14442<T[P]> }
  : T;

type Paths14442<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14442<K, Paths14442<T[K], Prev14442[D]>> : never }[keyof T]
  : never;

type Prev14442 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14442<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14442 {
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

type ConfigPaths14442 = Paths14442<NestedConfig14442>;

interface HeavyProps14442 {
  config: DeepPartial14442<NestedConfig14442>;
  path?: ConfigPaths14442;
}

const HeavyComponent14442 = memo(function HeavyComponent14442({ config }: HeavyProps14442) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14442) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14442 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14442: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14442.displayName = 'HeavyComponent14442';
export default HeavyComponent14442;
