'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9711<T> = T extends (infer U)[]
  ? DeepReadonlyArray9711<U>
  : T extends object
  ? DeepReadonlyObject9711<T>
  : T;

interface DeepReadonlyArray9711<T> extends ReadonlyArray<DeepReadonly9711<T>> {}

type DeepReadonlyObject9711<T> = {
  readonly [P in keyof T]: DeepReadonly9711<T[P]>;
};

type UnionToIntersection9711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9711<T> = UnionToIntersection9711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9711<T extends unknown[], V> = [...T, V];

type TuplifyUnion9711<T, L = LastOf9711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9711<TuplifyUnion9711<Exclude<T, L>>, L>;

type DeepPartial9711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9711<T[P]> }
  : T;

type Paths9711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9711<K, Paths9711<T[K], Prev9711[D]>> : never }[keyof T]
  : never;

type Prev9711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9711 {
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

type ConfigPaths9711 = Paths9711<NestedConfig9711>;

interface HeavyProps9711 {
  config: DeepPartial9711<NestedConfig9711>;
  path?: ConfigPaths9711;
}

const HeavyComponent9711 = memo(function HeavyComponent9711({ config }: HeavyProps9711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9711.displayName = 'HeavyComponent9711';
export default HeavyComponent9711;
