'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14756<T> = T extends (infer U)[]
  ? DeepReadonlyArray14756<U>
  : T extends object
  ? DeepReadonlyObject14756<T>
  : T;

interface DeepReadonlyArray14756<T> extends ReadonlyArray<DeepReadonly14756<T>> {}

type DeepReadonlyObject14756<T> = {
  readonly [P in keyof T]: DeepReadonly14756<T[P]>;
};

type UnionToIntersection14756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14756<T> = UnionToIntersection14756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14756<T extends unknown[], V> = [...T, V];

type TuplifyUnion14756<T, L = LastOf14756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14756<TuplifyUnion14756<Exclude<T, L>>, L>;

type DeepPartial14756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14756<T[P]> }
  : T;

type Paths14756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14756<K, Paths14756<T[K], Prev14756[D]>> : never }[keyof T]
  : never;

type Prev14756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14756 {
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

type ConfigPaths14756 = Paths14756<NestedConfig14756>;

interface HeavyProps14756 {
  config: DeepPartial14756<NestedConfig14756>;
  path?: ConfigPaths14756;
}

const HeavyComponent14756 = memo(function HeavyComponent14756({ config }: HeavyProps14756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14756.displayName = 'HeavyComponent14756';
export default HeavyComponent14756;
