'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9346<T> = T extends (infer U)[]
  ? DeepReadonlyArray9346<U>
  : T extends object
  ? DeepReadonlyObject9346<T>
  : T;

interface DeepReadonlyArray9346<T> extends ReadonlyArray<DeepReadonly9346<T>> {}

type DeepReadonlyObject9346<T> = {
  readonly [P in keyof T]: DeepReadonly9346<T[P]>;
};

type UnionToIntersection9346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9346<T> = UnionToIntersection9346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9346<T extends unknown[], V> = [...T, V];

type TuplifyUnion9346<T, L = LastOf9346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9346<TuplifyUnion9346<Exclude<T, L>>, L>;

type DeepPartial9346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9346<T[P]> }
  : T;

type Paths9346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9346<K, Paths9346<T[K], Prev9346[D]>> : never }[keyof T]
  : never;

type Prev9346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9346 {
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

type ConfigPaths9346 = Paths9346<NestedConfig9346>;

interface HeavyProps9346 {
  config: DeepPartial9346<NestedConfig9346>;
  path?: ConfigPaths9346;
}

const HeavyComponent9346 = memo(function HeavyComponent9346({ config }: HeavyProps9346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9346.displayName = 'HeavyComponent9346';
export default HeavyComponent9346;
