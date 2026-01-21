'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4711<T> = T extends (infer U)[]
  ? DeepReadonlyArray4711<U>
  : T extends object
  ? DeepReadonlyObject4711<T>
  : T;

interface DeepReadonlyArray4711<T> extends ReadonlyArray<DeepReadonly4711<T>> {}

type DeepReadonlyObject4711<T> = {
  readonly [P in keyof T]: DeepReadonly4711<T[P]>;
};

type UnionToIntersection4711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4711<T> = UnionToIntersection4711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4711<T extends unknown[], V> = [...T, V];

type TuplifyUnion4711<T, L = LastOf4711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4711<TuplifyUnion4711<Exclude<T, L>>, L>;

type DeepPartial4711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4711<T[P]> }
  : T;

type Paths4711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4711<K, Paths4711<T[K], Prev4711[D]>> : never }[keyof T]
  : never;

type Prev4711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4711 {
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

type ConfigPaths4711 = Paths4711<NestedConfig4711>;

interface HeavyProps4711 {
  config: DeepPartial4711<NestedConfig4711>;
  path?: ConfigPaths4711;
}

const HeavyComponent4711 = memo(function HeavyComponent4711({ config }: HeavyProps4711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4711.displayName = 'HeavyComponent4711';
export default HeavyComponent4711;
