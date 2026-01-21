'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14229<T> = T extends (infer U)[]
  ? DeepReadonlyArray14229<U>
  : T extends object
  ? DeepReadonlyObject14229<T>
  : T;

interface DeepReadonlyArray14229<T> extends ReadonlyArray<DeepReadonly14229<T>> {}

type DeepReadonlyObject14229<T> = {
  readonly [P in keyof T]: DeepReadonly14229<T[P]>;
};

type UnionToIntersection14229<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14229<T> = UnionToIntersection14229<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14229<T extends unknown[], V> = [...T, V];

type TuplifyUnion14229<T, L = LastOf14229<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14229<TuplifyUnion14229<Exclude<T, L>>, L>;

type DeepPartial14229<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14229<T[P]> }
  : T;

type Paths14229<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14229<K, Paths14229<T[K], Prev14229[D]>> : never }[keyof T]
  : never;

type Prev14229 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14229<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14229 {
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

type ConfigPaths14229 = Paths14229<NestedConfig14229>;

interface HeavyProps14229 {
  config: DeepPartial14229<NestedConfig14229>;
  path?: ConfigPaths14229;
}

const HeavyComponent14229 = memo(function HeavyComponent14229({ config }: HeavyProps14229) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14229) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14229 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14229: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14229.displayName = 'HeavyComponent14229';
export default HeavyComponent14229;
