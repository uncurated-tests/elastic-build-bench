'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2706<T> = T extends (infer U)[]
  ? DeepReadonlyArray2706<U>
  : T extends object
  ? DeepReadonlyObject2706<T>
  : T;

interface DeepReadonlyArray2706<T> extends ReadonlyArray<DeepReadonly2706<T>> {}

type DeepReadonlyObject2706<T> = {
  readonly [P in keyof T]: DeepReadonly2706<T[P]>;
};

type UnionToIntersection2706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2706<T> = UnionToIntersection2706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2706<T extends unknown[], V> = [...T, V];

type TuplifyUnion2706<T, L = LastOf2706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2706<TuplifyUnion2706<Exclude<T, L>>, L>;

type DeepPartial2706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2706<T[P]> }
  : T;

type Paths2706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2706<K, Paths2706<T[K], Prev2706[D]>> : never }[keyof T]
  : never;

type Prev2706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2706 {
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

type ConfigPaths2706 = Paths2706<NestedConfig2706>;

interface HeavyProps2706 {
  config: DeepPartial2706<NestedConfig2706>;
  path?: ConfigPaths2706;
}

const HeavyComponent2706 = memo(function HeavyComponent2706({ config }: HeavyProps2706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2706.displayName = 'HeavyComponent2706';
export default HeavyComponent2706;
