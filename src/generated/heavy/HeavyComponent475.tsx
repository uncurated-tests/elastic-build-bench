'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly475<T> = T extends (infer U)[]
  ? DeepReadonlyArray475<U>
  : T extends object
  ? DeepReadonlyObject475<T>
  : T;

interface DeepReadonlyArray475<T> extends ReadonlyArray<DeepReadonly475<T>> {}

type DeepReadonlyObject475<T> = {
  readonly [P in keyof T]: DeepReadonly475<T[P]>;
};

type UnionToIntersection475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf475<T> = UnionToIntersection475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push475<T extends unknown[], V> = [...T, V];

type TuplifyUnion475<T, L = LastOf475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push475<TuplifyUnion475<Exclude<T, L>>, L>;

type DeepPartial475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial475<T[P]> }
  : T;

type Paths475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join475<K, Paths475<T[K], Prev475[D]>> : never }[keyof T]
  : never;

type Prev475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig475 {
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

type ConfigPaths475 = Paths475<NestedConfig475>;

interface HeavyProps475 {
  config: DeepPartial475<NestedConfig475>;
  path?: ConfigPaths475;
}

const HeavyComponent475 = memo(function HeavyComponent475({ config }: HeavyProps475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent475.displayName = 'HeavyComponent475';
export default HeavyComponent475;
