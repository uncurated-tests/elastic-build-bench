'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14278<T> = T extends (infer U)[]
  ? DeepReadonlyArray14278<U>
  : T extends object
  ? DeepReadonlyObject14278<T>
  : T;

interface DeepReadonlyArray14278<T> extends ReadonlyArray<DeepReadonly14278<T>> {}

type DeepReadonlyObject14278<T> = {
  readonly [P in keyof T]: DeepReadonly14278<T[P]>;
};

type UnionToIntersection14278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14278<T> = UnionToIntersection14278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14278<T extends unknown[], V> = [...T, V];

type TuplifyUnion14278<T, L = LastOf14278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14278<TuplifyUnion14278<Exclude<T, L>>, L>;

type DeepPartial14278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14278<T[P]> }
  : T;

type Paths14278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14278<K, Paths14278<T[K], Prev14278[D]>> : never }[keyof T]
  : never;

type Prev14278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14278 {
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

type ConfigPaths14278 = Paths14278<NestedConfig14278>;

interface HeavyProps14278 {
  config: DeepPartial14278<NestedConfig14278>;
  path?: ConfigPaths14278;
}

const HeavyComponent14278 = memo(function HeavyComponent14278({ config }: HeavyProps14278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14278.displayName = 'HeavyComponent14278';
export default HeavyComponent14278;
