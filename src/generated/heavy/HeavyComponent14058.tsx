'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14058<T> = T extends (infer U)[]
  ? DeepReadonlyArray14058<U>
  : T extends object
  ? DeepReadonlyObject14058<T>
  : T;

interface DeepReadonlyArray14058<T> extends ReadonlyArray<DeepReadonly14058<T>> {}

type DeepReadonlyObject14058<T> = {
  readonly [P in keyof T]: DeepReadonly14058<T[P]>;
};

type UnionToIntersection14058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14058<T> = UnionToIntersection14058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14058<T extends unknown[], V> = [...T, V];

type TuplifyUnion14058<T, L = LastOf14058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14058<TuplifyUnion14058<Exclude<T, L>>, L>;

type DeepPartial14058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14058<T[P]> }
  : T;

type Paths14058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14058<K, Paths14058<T[K], Prev14058[D]>> : never }[keyof T]
  : never;

type Prev14058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14058 {
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

type ConfigPaths14058 = Paths14058<NestedConfig14058>;

interface HeavyProps14058 {
  config: DeepPartial14058<NestedConfig14058>;
  path?: ConfigPaths14058;
}

const HeavyComponent14058 = memo(function HeavyComponent14058({ config }: HeavyProps14058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14058.displayName = 'HeavyComponent14058';
export default HeavyComponent14058;
