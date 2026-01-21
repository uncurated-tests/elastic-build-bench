'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14702<T> = T extends (infer U)[]
  ? DeepReadonlyArray14702<U>
  : T extends object
  ? DeepReadonlyObject14702<T>
  : T;

interface DeepReadonlyArray14702<T> extends ReadonlyArray<DeepReadonly14702<T>> {}

type DeepReadonlyObject14702<T> = {
  readonly [P in keyof T]: DeepReadonly14702<T[P]>;
};

type UnionToIntersection14702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14702<T> = UnionToIntersection14702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14702<T extends unknown[], V> = [...T, V];

type TuplifyUnion14702<T, L = LastOf14702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14702<TuplifyUnion14702<Exclude<T, L>>, L>;

type DeepPartial14702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14702<T[P]> }
  : T;

type Paths14702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14702<K, Paths14702<T[K], Prev14702[D]>> : never }[keyof T]
  : never;

type Prev14702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14702 {
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

type ConfigPaths14702 = Paths14702<NestedConfig14702>;

interface HeavyProps14702 {
  config: DeepPartial14702<NestedConfig14702>;
  path?: ConfigPaths14702;
}

const HeavyComponent14702 = memo(function HeavyComponent14702({ config }: HeavyProps14702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14702.displayName = 'HeavyComponent14702';
export default HeavyComponent14702;
