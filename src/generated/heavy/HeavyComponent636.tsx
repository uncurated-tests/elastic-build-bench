'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly636<T> = T extends (infer U)[]
  ? DeepReadonlyArray636<U>
  : T extends object
  ? DeepReadonlyObject636<T>
  : T;

interface DeepReadonlyArray636<T> extends ReadonlyArray<DeepReadonly636<T>> {}

type DeepReadonlyObject636<T> = {
  readonly [P in keyof T]: DeepReadonly636<T[P]>;
};

type UnionToIntersection636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf636<T> = UnionToIntersection636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push636<T extends unknown[], V> = [...T, V];

type TuplifyUnion636<T, L = LastOf636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push636<TuplifyUnion636<Exclude<T, L>>, L>;

type DeepPartial636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial636<T[P]> }
  : T;

type Paths636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join636<K, Paths636<T[K], Prev636[D]>> : never }[keyof T]
  : never;

type Prev636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig636 {
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

type ConfigPaths636 = Paths636<NestedConfig636>;

interface HeavyProps636 {
  config: DeepPartial636<NestedConfig636>;
  path?: ConfigPaths636;
}

const HeavyComponent636 = memo(function HeavyComponent636({ config }: HeavyProps636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent636.displayName = 'HeavyComponent636';
export default HeavyComponent636;
