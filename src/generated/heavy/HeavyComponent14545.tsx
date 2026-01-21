'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14545<T> = T extends (infer U)[]
  ? DeepReadonlyArray14545<U>
  : T extends object
  ? DeepReadonlyObject14545<T>
  : T;

interface DeepReadonlyArray14545<T> extends ReadonlyArray<DeepReadonly14545<T>> {}

type DeepReadonlyObject14545<T> = {
  readonly [P in keyof T]: DeepReadonly14545<T[P]>;
};

type UnionToIntersection14545<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14545<T> = UnionToIntersection14545<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14545<T extends unknown[], V> = [...T, V];

type TuplifyUnion14545<T, L = LastOf14545<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14545<TuplifyUnion14545<Exclude<T, L>>, L>;

type DeepPartial14545<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14545<T[P]> }
  : T;

type Paths14545<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14545<K, Paths14545<T[K], Prev14545[D]>> : never }[keyof T]
  : never;

type Prev14545 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14545<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14545 {
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

type ConfigPaths14545 = Paths14545<NestedConfig14545>;

interface HeavyProps14545 {
  config: DeepPartial14545<NestedConfig14545>;
  path?: ConfigPaths14545;
}

const HeavyComponent14545 = memo(function HeavyComponent14545({ config }: HeavyProps14545) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14545) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14545 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14545: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14545.displayName = 'HeavyComponent14545';
export default HeavyComponent14545;
