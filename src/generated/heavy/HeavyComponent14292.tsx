'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14292<T> = T extends (infer U)[]
  ? DeepReadonlyArray14292<U>
  : T extends object
  ? DeepReadonlyObject14292<T>
  : T;

interface DeepReadonlyArray14292<T> extends ReadonlyArray<DeepReadonly14292<T>> {}

type DeepReadonlyObject14292<T> = {
  readonly [P in keyof T]: DeepReadonly14292<T[P]>;
};

type UnionToIntersection14292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14292<T> = UnionToIntersection14292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14292<T extends unknown[], V> = [...T, V];

type TuplifyUnion14292<T, L = LastOf14292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14292<TuplifyUnion14292<Exclude<T, L>>, L>;

type DeepPartial14292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14292<T[P]> }
  : T;

type Paths14292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14292<K, Paths14292<T[K], Prev14292[D]>> : never }[keyof T]
  : never;

type Prev14292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14292 {
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

type ConfigPaths14292 = Paths14292<NestedConfig14292>;

interface HeavyProps14292 {
  config: DeepPartial14292<NestedConfig14292>;
  path?: ConfigPaths14292;
}

const HeavyComponent14292 = memo(function HeavyComponent14292({ config }: HeavyProps14292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14292.displayName = 'HeavyComponent14292';
export default HeavyComponent14292;
