'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2555<T> = T extends (infer U)[]
  ? DeepReadonlyArray2555<U>
  : T extends object
  ? DeepReadonlyObject2555<T>
  : T;

interface DeepReadonlyArray2555<T> extends ReadonlyArray<DeepReadonly2555<T>> {}

type DeepReadonlyObject2555<T> = {
  readonly [P in keyof T]: DeepReadonly2555<T[P]>;
};

type UnionToIntersection2555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2555<T> = UnionToIntersection2555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2555<T extends unknown[], V> = [...T, V];

type TuplifyUnion2555<T, L = LastOf2555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2555<TuplifyUnion2555<Exclude<T, L>>, L>;

type DeepPartial2555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2555<T[P]> }
  : T;

type Paths2555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2555<K, Paths2555<T[K], Prev2555[D]>> : never }[keyof T]
  : never;

type Prev2555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2555 {
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

type ConfigPaths2555 = Paths2555<NestedConfig2555>;

interface HeavyProps2555 {
  config: DeepPartial2555<NestedConfig2555>;
  path?: ConfigPaths2555;
}

const HeavyComponent2555 = memo(function HeavyComponent2555({ config }: HeavyProps2555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2555.displayName = 'HeavyComponent2555';
export default HeavyComponent2555;
