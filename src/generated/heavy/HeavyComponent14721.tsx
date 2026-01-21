'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14721<T> = T extends (infer U)[]
  ? DeepReadonlyArray14721<U>
  : T extends object
  ? DeepReadonlyObject14721<T>
  : T;

interface DeepReadonlyArray14721<T> extends ReadonlyArray<DeepReadonly14721<T>> {}

type DeepReadonlyObject14721<T> = {
  readonly [P in keyof T]: DeepReadonly14721<T[P]>;
};

type UnionToIntersection14721<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14721<T> = UnionToIntersection14721<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14721<T extends unknown[], V> = [...T, V];

type TuplifyUnion14721<T, L = LastOf14721<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14721<TuplifyUnion14721<Exclude<T, L>>, L>;

type DeepPartial14721<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14721<T[P]> }
  : T;

type Paths14721<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14721<K, Paths14721<T[K], Prev14721[D]>> : never }[keyof T]
  : never;

type Prev14721 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14721<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14721 {
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

type ConfigPaths14721 = Paths14721<NestedConfig14721>;

interface HeavyProps14721 {
  config: DeepPartial14721<NestedConfig14721>;
  path?: ConfigPaths14721;
}

const HeavyComponent14721 = memo(function HeavyComponent14721({ config }: HeavyProps14721) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14721) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14721 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14721: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14721.displayName = 'HeavyComponent14721';
export default HeavyComponent14721;
