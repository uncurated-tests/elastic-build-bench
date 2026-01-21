'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9761<T> = T extends (infer U)[]
  ? DeepReadonlyArray9761<U>
  : T extends object
  ? DeepReadonlyObject9761<T>
  : T;

interface DeepReadonlyArray9761<T> extends ReadonlyArray<DeepReadonly9761<T>> {}

type DeepReadonlyObject9761<T> = {
  readonly [P in keyof T]: DeepReadonly9761<T[P]>;
};

type UnionToIntersection9761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9761<T> = UnionToIntersection9761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9761<T extends unknown[], V> = [...T, V];

type TuplifyUnion9761<T, L = LastOf9761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9761<TuplifyUnion9761<Exclude<T, L>>, L>;

type DeepPartial9761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9761<T[P]> }
  : T;

type Paths9761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9761<K, Paths9761<T[K], Prev9761[D]>> : never }[keyof T]
  : never;

type Prev9761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9761 {
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

type ConfigPaths9761 = Paths9761<NestedConfig9761>;

interface HeavyProps9761 {
  config: DeepPartial9761<NestedConfig9761>;
  path?: ConfigPaths9761;
}

const HeavyComponent9761 = memo(function HeavyComponent9761({ config }: HeavyProps9761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9761.displayName = 'HeavyComponent9761';
export default HeavyComponent9761;
