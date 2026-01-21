'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4024<T> = T extends (infer U)[]
  ? DeepReadonlyArray4024<U>
  : T extends object
  ? DeepReadonlyObject4024<T>
  : T;

interface DeepReadonlyArray4024<T> extends ReadonlyArray<DeepReadonly4024<T>> {}

type DeepReadonlyObject4024<T> = {
  readonly [P in keyof T]: DeepReadonly4024<T[P]>;
};

type UnionToIntersection4024<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4024<T> = UnionToIntersection4024<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4024<T extends unknown[], V> = [...T, V];

type TuplifyUnion4024<T, L = LastOf4024<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4024<TuplifyUnion4024<Exclude<T, L>>, L>;

type DeepPartial4024<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4024<T[P]> }
  : T;

type Paths4024<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4024<K, Paths4024<T[K], Prev4024[D]>> : never }[keyof T]
  : never;

type Prev4024 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4024<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4024 {
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

type ConfigPaths4024 = Paths4024<NestedConfig4024>;

interface HeavyProps4024 {
  config: DeepPartial4024<NestedConfig4024>;
  path?: ConfigPaths4024;
}

const HeavyComponent4024 = memo(function HeavyComponent4024({ config }: HeavyProps4024) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4024) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4024 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4024: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4024.displayName = 'HeavyComponent4024';
export default HeavyComponent4024;
