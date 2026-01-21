'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9018<T> = T extends (infer U)[]
  ? DeepReadonlyArray9018<U>
  : T extends object
  ? DeepReadonlyObject9018<T>
  : T;

interface DeepReadonlyArray9018<T> extends ReadonlyArray<DeepReadonly9018<T>> {}

type DeepReadonlyObject9018<T> = {
  readonly [P in keyof T]: DeepReadonly9018<T[P]>;
};

type UnionToIntersection9018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9018<T> = UnionToIntersection9018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9018<T extends unknown[], V> = [...T, V];

type TuplifyUnion9018<T, L = LastOf9018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9018<TuplifyUnion9018<Exclude<T, L>>, L>;

type DeepPartial9018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9018<T[P]> }
  : T;

type Paths9018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9018<K, Paths9018<T[K], Prev9018[D]>> : never }[keyof T]
  : never;

type Prev9018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9018 {
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

type ConfigPaths9018 = Paths9018<NestedConfig9018>;

interface HeavyProps9018 {
  config: DeepPartial9018<NestedConfig9018>;
  path?: ConfigPaths9018;
}

const HeavyComponent9018 = memo(function HeavyComponent9018({ config }: HeavyProps9018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9018.displayName = 'HeavyComponent9018';
export default HeavyComponent9018;
