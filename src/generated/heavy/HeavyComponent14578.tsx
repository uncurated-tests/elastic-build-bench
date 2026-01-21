'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14578<T> = T extends (infer U)[]
  ? DeepReadonlyArray14578<U>
  : T extends object
  ? DeepReadonlyObject14578<T>
  : T;

interface DeepReadonlyArray14578<T> extends ReadonlyArray<DeepReadonly14578<T>> {}

type DeepReadonlyObject14578<T> = {
  readonly [P in keyof T]: DeepReadonly14578<T[P]>;
};

type UnionToIntersection14578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14578<T> = UnionToIntersection14578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14578<T extends unknown[], V> = [...T, V];

type TuplifyUnion14578<T, L = LastOf14578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14578<TuplifyUnion14578<Exclude<T, L>>, L>;

type DeepPartial14578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14578<T[P]> }
  : T;

type Paths14578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14578<K, Paths14578<T[K], Prev14578[D]>> : never }[keyof T]
  : never;

type Prev14578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14578 {
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

type ConfigPaths14578 = Paths14578<NestedConfig14578>;

interface HeavyProps14578 {
  config: DeepPartial14578<NestedConfig14578>;
  path?: ConfigPaths14578;
}

const HeavyComponent14578 = memo(function HeavyComponent14578({ config }: HeavyProps14578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14578.displayName = 'HeavyComponent14578';
export default HeavyComponent14578;
