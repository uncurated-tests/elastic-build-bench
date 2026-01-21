'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14563<T> = T extends (infer U)[]
  ? DeepReadonlyArray14563<U>
  : T extends object
  ? DeepReadonlyObject14563<T>
  : T;

interface DeepReadonlyArray14563<T> extends ReadonlyArray<DeepReadonly14563<T>> {}

type DeepReadonlyObject14563<T> = {
  readonly [P in keyof T]: DeepReadonly14563<T[P]>;
};

type UnionToIntersection14563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14563<T> = UnionToIntersection14563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14563<T extends unknown[], V> = [...T, V];

type TuplifyUnion14563<T, L = LastOf14563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14563<TuplifyUnion14563<Exclude<T, L>>, L>;

type DeepPartial14563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14563<T[P]> }
  : T;

type Paths14563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14563<K, Paths14563<T[K], Prev14563[D]>> : never }[keyof T]
  : never;

type Prev14563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14563 {
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

type ConfigPaths14563 = Paths14563<NestedConfig14563>;

interface HeavyProps14563 {
  config: DeepPartial14563<NestedConfig14563>;
  path?: ConfigPaths14563;
}

const HeavyComponent14563 = memo(function HeavyComponent14563({ config }: HeavyProps14563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14563.displayName = 'HeavyComponent14563';
export default HeavyComponent14563;
