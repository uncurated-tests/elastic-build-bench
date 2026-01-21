'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14153<T> = T extends (infer U)[]
  ? DeepReadonlyArray14153<U>
  : T extends object
  ? DeepReadonlyObject14153<T>
  : T;

interface DeepReadonlyArray14153<T> extends ReadonlyArray<DeepReadonly14153<T>> {}

type DeepReadonlyObject14153<T> = {
  readonly [P in keyof T]: DeepReadonly14153<T[P]>;
};

type UnionToIntersection14153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14153<T> = UnionToIntersection14153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14153<T extends unknown[], V> = [...T, V];

type TuplifyUnion14153<T, L = LastOf14153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14153<TuplifyUnion14153<Exclude<T, L>>, L>;

type DeepPartial14153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14153<T[P]> }
  : T;

type Paths14153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14153<K, Paths14153<T[K], Prev14153[D]>> : never }[keyof T]
  : never;

type Prev14153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14153 {
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

type ConfigPaths14153 = Paths14153<NestedConfig14153>;

interface HeavyProps14153 {
  config: DeepPartial14153<NestedConfig14153>;
  path?: ConfigPaths14153;
}

const HeavyComponent14153 = memo(function HeavyComponent14153({ config }: HeavyProps14153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14153.displayName = 'HeavyComponent14153';
export default HeavyComponent14153;
