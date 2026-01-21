'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14070<T> = T extends (infer U)[]
  ? DeepReadonlyArray14070<U>
  : T extends object
  ? DeepReadonlyObject14070<T>
  : T;

interface DeepReadonlyArray14070<T> extends ReadonlyArray<DeepReadonly14070<T>> {}

type DeepReadonlyObject14070<T> = {
  readonly [P in keyof T]: DeepReadonly14070<T[P]>;
};

type UnionToIntersection14070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14070<T> = UnionToIntersection14070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14070<T extends unknown[], V> = [...T, V];

type TuplifyUnion14070<T, L = LastOf14070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14070<TuplifyUnion14070<Exclude<T, L>>, L>;

type DeepPartial14070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14070<T[P]> }
  : T;

type Paths14070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14070<K, Paths14070<T[K], Prev14070[D]>> : never }[keyof T]
  : never;

type Prev14070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14070 {
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

type ConfigPaths14070 = Paths14070<NestedConfig14070>;

interface HeavyProps14070 {
  config: DeepPartial14070<NestedConfig14070>;
  path?: ConfigPaths14070;
}

const HeavyComponent14070 = memo(function HeavyComponent14070({ config }: HeavyProps14070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14070.displayName = 'HeavyComponent14070';
export default HeavyComponent14070;
