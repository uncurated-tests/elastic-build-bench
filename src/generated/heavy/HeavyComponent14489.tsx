'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14489<T> = T extends (infer U)[]
  ? DeepReadonlyArray14489<U>
  : T extends object
  ? DeepReadonlyObject14489<T>
  : T;

interface DeepReadonlyArray14489<T> extends ReadonlyArray<DeepReadonly14489<T>> {}

type DeepReadonlyObject14489<T> = {
  readonly [P in keyof T]: DeepReadonly14489<T[P]>;
};

type UnionToIntersection14489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14489<T> = UnionToIntersection14489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14489<T extends unknown[], V> = [...T, V];

type TuplifyUnion14489<T, L = LastOf14489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14489<TuplifyUnion14489<Exclude<T, L>>, L>;

type DeepPartial14489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14489<T[P]> }
  : T;

type Paths14489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14489<K, Paths14489<T[K], Prev14489[D]>> : never }[keyof T]
  : never;

type Prev14489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14489 {
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

type ConfigPaths14489 = Paths14489<NestedConfig14489>;

interface HeavyProps14489 {
  config: DeepPartial14489<NestedConfig14489>;
  path?: ConfigPaths14489;
}

const HeavyComponent14489 = memo(function HeavyComponent14489({ config }: HeavyProps14489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14489.displayName = 'HeavyComponent14489';
export default HeavyComponent14489;
