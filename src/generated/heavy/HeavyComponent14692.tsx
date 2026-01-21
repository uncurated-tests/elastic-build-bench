'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14692<T> = T extends (infer U)[]
  ? DeepReadonlyArray14692<U>
  : T extends object
  ? DeepReadonlyObject14692<T>
  : T;

interface DeepReadonlyArray14692<T> extends ReadonlyArray<DeepReadonly14692<T>> {}

type DeepReadonlyObject14692<T> = {
  readonly [P in keyof T]: DeepReadonly14692<T[P]>;
};

type UnionToIntersection14692<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14692<T> = UnionToIntersection14692<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14692<T extends unknown[], V> = [...T, V];

type TuplifyUnion14692<T, L = LastOf14692<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14692<TuplifyUnion14692<Exclude<T, L>>, L>;

type DeepPartial14692<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14692<T[P]> }
  : T;

type Paths14692<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14692<K, Paths14692<T[K], Prev14692[D]>> : never }[keyof T]
  : never;

type Prev14692 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14692<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14692 {
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

type ConfigPaths14692 = Paths14692<NestedConfig14692>;

interface HeavyProps14692 {
  config: DeepPartial14692<NestedConfig14692>;
  path?: ConfigPaths14692;
}

const HeavyComponent14692 = memo(function HeavyComponent14692({ config }: HeavyProps14692) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14692) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14692 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14692: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14692.displayName = 'HeavyComponent14692';
export default HeavyComponent14692;
