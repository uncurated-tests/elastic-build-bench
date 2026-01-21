'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14503<T> = T extends (infer U)[]
  ? DeepReadonlyArray14503<U>
  : T extends object
  ? DeepReadonlyObject14503<T>
  : T;

interface DeepReadonlyArray14503<T> extends ReadonlyArray<DeepReadonly14503<T>> {}

type DeepReadonlyObject14503<T> = {
  readonly [P in keyof T]: DeepReadonly14503<T[P]>;
};

type UnionToIntersection14503<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14503<T> = UnionToIntersection14503<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14503<T extends unknown[], V> = [...T, V];

type TuplifyUnion14503<T, L = LastOf14503<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14503<TuplifyUnion14503<Exclude<T, L>>, L>;

type DeepPartial14503<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14503<T[P]> }
  : T;

type Paths14503<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14503<K, Paths14503<T[K], Prev14503[D]>> : never }[keyof T]
  : never;

type Prev14503 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14503<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14503 {
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

type ConfigPaths14503 = Paths14503<NestedConfig14503>;

interface HeavyProps14503 {
  config: DeepPartial14503<NestedConfig14503>;
  path?: ConfigPaths14503;
}

const HeavyComponent14503 = memo(function HeavyComponent14503({ config }: HeavyProps14503) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14503) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14503 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14503: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14503.displayName = 'HeavyComponent14503';
export default HeavyComponent14503;
