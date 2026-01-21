'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14524<T> = T extends (infer U)[]
  ? DeepReadonlyArray14524<U>
  : T extends object
  ? DeepReadonlyObject14524<T>
  : T;

interface DeepReadonlyArray14524<T> extends ReadonlyArray<DeepReadonly14524<T>> {}

type DeepReadonlyObject14524<T> = {
  readonly [P in keyof T]: DeepReadonly14524<T[P]>;
};

type UnionToIntersection14524<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14524<T> = UnionToIntersection14524<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14524<T extends unknown[], V> = [...T, V];

type TuplifyUnion14524<T, L = LastOf14524<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14524<TuplifyUnion14524<Exclude<T, L>>, L>;

type DeepPartial14524<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14524<T[P]> }
  : T;

type Paths14524<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14524<K, Paths14524<T[K], Prev14524[D]>> : never }[keyof T]
  : never;

type Prev14524 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14524<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14524 {
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

type ConfigPaths14524 = Paths14524<NestedConfig14524>;

interface HeavyProps14524 {
  config: DeepPartial14524<NestedConfig14524>;
  path?: ConfigPaths14524;
}

const HeavyComponent14524 = memo(function HeavyComponent14524({ config }: HeavyProps14524) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14524) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14524 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14524: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14524.displayName = 'HeavyComponent14524';
export default HeavyComponent14524;
