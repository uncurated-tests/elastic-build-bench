'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly367<T> = T extends (infer U)[]
  ? DeepReadonlyArray367<U>
  : T extends object
  ? DeepReadonlyObject367<T>
  : T;

interface DeepReadonlyArray367<T> extends ReadonlyArray<DeepReadonly367<T>> {}

type DeepReadonlyObject367<T> = {
  readonly [P in keyof T]: DeepReadonly367<T[P]>;
};

type UnionToIntersection367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf367<T> = UnionToIntersection367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push367<T extends unknown[], V> = [...T, V];

type TuplifyUnion367<T, L = LastOf367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push367<TuplifyUnion367<Exclude<T, L>>, L>;

type DeepPartial367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial367<T[P]> }
  : T;

type Paths367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join367<K, Paths367<T[K], Prev367[D]>> : never }[keyof T]
  : never;

type Prev367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig367 {
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

type ConfigPaths367 = Paths367<NestedConfig367>;

interface HeavyProps367 {
  config: DeepPartial367<NestedConfig367>;
  path?: ConfigPaths367;
}

const HeavyComponent367 = memo(function HeavyComponent367({ config }: HeavyProps367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent367.displayName = 'HeavyComponent367';
export default HeavyComponent367;
