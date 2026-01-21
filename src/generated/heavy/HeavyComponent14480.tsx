'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14480<T> = T extends (infer U)[]
  ? DeepReadonlyArray14480<U>
  : T extends object
  ? DeepReadonlyObject14480<T>
  : T;

interface DeepReadonlyArray14480<T> extends ReadonlyArray<DeepReadonly14480<T>> {}

type DeepReadonlyObject14480<T> = {
  readonly [P in keyof T]: DeepReadonly14480<T[P]>;
};

type UnionToIntersection14480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14480<T> = UnionToIntersection14480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14480<T extends unknown[], V> = [...T, V];

type TuplifyUnion14480<T, L = LastOf14480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14480<TuplifyUnion14480<Exclude<T, L>>, L>;

type DeepPartial14480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14480<T[P]> }
  : T;

type Paths14480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14480<K, Paths14480<T[K], Prev14480[D]>> : never }[keyof T]
  : never;

type Prev14480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14480 {
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

type ConfigPaths14480 = Paths14480<NestedConfig14480>;

interface HeavyProps14480 {
  config: DeepPartial14480<NestedConfig14480>;
  path?: ConfigPaths14480;
}

const HeavyComponent14480 = memo(function HeavyComponent14480({ config }: HeavyProps14480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14480.displayName = 'HeavyComponent14480';
export default HeavyComponent14480;
