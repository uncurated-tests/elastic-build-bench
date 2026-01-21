'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14126<T> = T extends (infer U)[]
  ? DeepReadonlyArray14126<U>
  : T extends object
  ? DeepReadonlyObject14126<T>
  : T;

interface DeepReadonlyArray14126<T> extends ReadonlyArray<DeepReadonly14126<T>> {}

type DeepReadonlyObject14126<T> = {
  readonly [P in keyof T]: DeepReadonly14126<T[P]>;
};

type UnionToIntersection14126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14126<T> = UnionToIntersection14126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14126<T extends unknown[], V> = [...T, V];

type TuplifyUnion14126<T, L = LastOf14126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14126<TuplifyUnion14126<Exclude<T, L>>, L>;

type DeepPartial14126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14126<T[P]> }
  : T;

type Paths14126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14126<K, Paths14126<T[K], Prev14126[D]>> : never }[keyof T]
  : never;

type Prev14126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14126 {
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

type ConfigPaths14126 = Paths14126<NestedConfig14126>;

interface HeavyProps14126 {
  config: DeepPartial14126<NestedConfig14126>;
  path?: ConfigPaths14126;
}

const HeavyComponent14126 = memo(function HeavyComponent14126({ config }: HeavyProps14126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14126.displayName = 'HeavyComponent14126';
export default HeavyComponent14126;
