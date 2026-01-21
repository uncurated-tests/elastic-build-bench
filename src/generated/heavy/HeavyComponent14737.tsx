'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14737<T> = T extends (infer U)[]
  ? DeepReadonlyArray14737<U>
  : T extends object
  ? DeepReadonlyObject14737<T>
  : T;

interface DeepReadonlyArray14737<T> extends ReadonlyArray<DeepReadonly14737<T>> {}

type DeepReadonlyObject14737<T> = {
  readonly [P in keyof T]: DeepReadonly14737<T[P]>;
};

type UnionToIntersection14737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14737<T> = UnionToIntersection14737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14737<T extends unknown[], V> = [...T, V];

type TuplifyUnion14737<T, L = LastOf14737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14737<TuplifyUnion14737<Exclude<T, L>>, L>;

type DeepPartial14737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14737<T[P]> }
  : T;

type Paths14737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14737<K, Paths14737<T[K], Prev14737[D]>> : never }[keyof T]
  : never;

type Prev14737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14737 {
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

type ConfigPaths14737 = Paths14737<NestedConfig14737>;

interface HeavyProps14737 {
  config: DeepPartial14737<NestedConfig14737>;
  path?: ConfigPaths14737;
}

const HeavyComponent14737 = memo(function HeavyComponent14737({ config }: HeavyProps14737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14737.displayName = 'HeavyComponent14737';
export default HeavyComponent14737;
