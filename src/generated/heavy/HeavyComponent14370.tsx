'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14370<T> = T extends (infer U)[]
  ? DeepReadonlyArray14370<U>
  : T extends object
  ? DeepReadonlyObject14370<T>
  : T;

interface DeepReadonlyArray14370<T> extends ReadonlyArray<DeepReadonly14370<T>> {}

type DeepReadonlyObject14370<T> = {
  readonly [P in keyof T]: DeepReadonly14370<T[P]>;
};

type UnionToIntersection14370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14370<T> = UnionToIntersection14370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14370<T extends unknown[], V> = [...T, V];

type TuplifyUnion14370<T, L = LastOf14370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14370<TuplifyUnion14370<Exclude<T, L>>, L>;

type DeepPartial14370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14370<T[P]> }
  : T;

type Paths14370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14370<K, Paths14370<T[K], Prev14370[D]>> : never }[keyof T]
  : never;

type Prev14370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14370 {
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

type ConfigPaths14370 = Paths14370<NestedConfig14370>;

interface HeavyProps14370 {
  config: DeepPartial14370<NestedConfig14370>;
  path?: ConfigPaths14370;
}

const HeavyComponent14370 = memo(function HeavyComponent14370({ config }: HeavyProps14370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14370.displayName = 'HeavyComponent14370';
export default HeavyComponent14370;
