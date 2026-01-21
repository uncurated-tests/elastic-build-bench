'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14941<T> = T extends (infer U)[]
  ? DeepReadonlyArray14941<U>
  : T extends object
  ? DeepReadonlyObject14941<T>
  : T;

interface DeepReadonlyArray14941<T> extends ReadonlyArray<DeepReadonly14941<T>> {}

type DeepReadonlyObject14941<T> = {
  readonly [P in keyof T]: DeepReadonly14941<T[P]>;
};

type UnionToIntersection14941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14941<T> = UnionToIntersection14941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14941<T extends unknown[], V> = [...T, V];

type TuplifyUnion14941<T, L = LastOf14941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14941<TuplifyUnion14941<Exclude<T, L>>, L>;

type DeepPartial14941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14941<T[P]> }
  : T;

type Paths14941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14941<K, Paths14941<T[K], Prev14941[D]>> : never }[keyof T]
  : never;

type Prev14941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14941 {
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

type ConfigPaths14941 = Paths14941<NestedConfig14941>;

interface HeavyProps14941 {
  config: DeepPartial14941<NestedConfig14941>;
  path?: ConfigPaths14941;
}

const HeavyComponent14941 = memo(function HeavyComponent14941({ config }: HeavyProps14941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14941.displayName = 'HeavyComponent14941';
export default HeavyComponent14941;
