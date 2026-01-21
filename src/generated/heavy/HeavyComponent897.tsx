'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly897<T> = T extends (infer U)[]
  ? DeepReadonlyArray897<U>
  : T extends object
  ? DeepReadonlyObject897<T>
  : T;

interface DeepReadonlyArray897<T> extends ReadonlyArray<DeepReadonly897<T>> {}

type DeepReadonlyObject897<T> = {
  readonly [P in keyof T]: DeepReadonly897<T[P]>;
};

type UnionToIntersection897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf897<T> = UnionToIntersection897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push897<T extends unknown[], V> = [...T, V];

type TuplifyUnion897<T, L = LastOf897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push897<TuplifyUnion897<Exclude<T, L>>, L>;

type DeepPartial897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial897<T[P]> }
  : T;

type Paths897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join897<K, Paths897<T[K], Prev897[D]>> : never }[keyof T]
  : never;

type Prev897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig897 {
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

type ConfigPaths897 = Paths897<NestedConfig897>;

interface HeavyProps897 {
  config: DeepPartial897<NestedConfig897>;
  path?: ConfigPaths897;
}

const HeavyComponent897 = memo(function HeavyComponent897({ config }: HeavyProps897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent897.displayName = 'HeavyComponent897';
export default HeavyComponent897;
