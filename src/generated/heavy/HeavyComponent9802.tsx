'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9802<T> = T extends (infer U)[]
  ? DeepReadonlyArray9802<U>
  : T extends object
  ? DeepReadonlyObject9802<T>
  : T;

interface DeepReadonlyArray9802<T> extends ReadonlyArray<DeepReadonly9802<T>> {}

type DeepReadonlyObject9802<T> = {
  readonly [P in keyof T]: DeepReadonly9802<T[P]>;
};

type UnionToIntersection9802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9802<T> = UnionToIntersection9802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9802<T extends unknown[], V> = [...T, V];

type TuplifyUnion9802<T, L = LastOf9802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9802<TuplifyUnion9802<Exclude<T, L>>, L>;

type DeepPartial9802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9802<T[P]> }
  : T;

type Paths9802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9802<K, Paths9802<T[K], Prev9802[D]>> : never }[keyof T]
  : never;

type Prev9802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9802 {
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

type ConfigPaths9802 = Paths9802<NestedConfig9802>;

interface HeavyProps9802 {
  config: DeepPartial9802<NestedConfig9802>;
  path?: ConfigPaths9802;
}

const HeavyComponent9802 = memo(function HeavyComponent9802({ config }: HeavyProps9802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9802.displayName = 'HeavyComponent9802';
export default HeavyComponent9802;
