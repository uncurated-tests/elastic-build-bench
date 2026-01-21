'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly141<T> = T extends (infer U)[]
  ? DeepReadonlyArray141<U>
  : T extends object
  ? DeepReadonlyObject141<T>
  : T;

interface DeepReadonlyArray141<T> extends ReadonlyArray<DeepReadonly141<T>> {}

type DeepReadonlyObject141<T> = {
  readonly [P in keyof T]: DeepReadonly141<T[P]>;
};

type UnionToIntersection141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf141<T> = UnionToIntersection141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push141<T extends unknown[], V> = [...T, V];

type TuplifyUnion141<T, L = LastOf141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push141<TuplifyUnion141<Exclude<T, L>>, L>;

type DeepPartial141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial141<T[P]> }
  : T;

type Paths141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join141<K, Paths141<T[K], Prev141[D]>> : never }[keyof T]
  : never;

type Prev141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig141 {
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

type ConfigPaths141 = Paths141<NestedConfig141>;

interface HeavyProps141 {
  config: DeepPartial141<NestedConfig141>;
  path?: ConfigPaths141;
}

const HeavyComponent141 = memo(function HeavyComponent141({ config }: HeavyProps141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent141.displayName = 'HeavyComponent141';
export default HeavyComponent141;
