'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4088<T> = T extends (infer U)[]
  ? DeepReadonlyArray4088<U>
  : T extends object
  ? DeepReadonlyObject4088<T>
  : T;

interface DeepReadonlyArray4088<T> extends ReadonlyArray<DeepReadonly4088<T>> {}

type DeepReadonlyObject4088<T> = {
  readonly [P in keyof T]: DeepReadonly4088<T[P]>;
};

type UnionToIntersection4088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4088<T> = UnionToIntersection4088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4088<T extends unknown[], V> = [...T, V];

type TuplifyUnion4088<T, L = LastOf4088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4088<TuplifyUnion4088<Exclude<T, L>>, L>;

type DeepPartial4088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4088<T[P]> }
  : T;

type Paths4088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4088<K, Paths4088<T[K], Prev4088[D]>> : never }[keyof T]
  : never;

type Prev4088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4088 {
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

type ConfigPaths4088 = Paths4088<NestedConfig4088>;

interface HeavyProps4088 {
  config: DeepPartial4088<NestedConfig4088>;
  path?: ConfigPaths4088;
}

const HeavyComponent4088 = memo(function HeavyComponent4088({ config }: HeavyProps4088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4088.displayName = 'HeavyComponent4088';
export default HeavyComponent4088;
