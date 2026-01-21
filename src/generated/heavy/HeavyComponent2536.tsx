'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2536<T> = T extends (infer U)[]
  ? DeepReadonlyArray2536<U>
  : T extends object
  ? DeepReadonlyObject2536<T>
  : T;

interface DeepReadonlyArray2536<T> extends ReadonlyArray<DeepReadonly2536<T>> {}

type DeepReadonlyObject2536<T> = {
  readonly [P in keyof T]: DeepReadonly2536<T[P]>;
};

type UnionToIntersection2536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2536<T> = UnionToIntersection2536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2536<T extends unknown[], V> = [...T, V];

type TuplifyUnion2536<T, L = LastOf2536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2536<TuplifyUnion2536<Exclude<T, L>>, L>;

type DeepPartial2536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2536<T[P]> }
  : T;

type Paths2536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2536<K, Paths2536<T[K], Prev2536[D]>> : never }[keyof T]
  : never;

type Prev2536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2536 {
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

type ConfigPaths2536 = Paths2536<NestedConfig2536>;

interface HeavyProps2536 {
  config: DeepPartial2536<NestedConfig2536>;
  path?: ConfigPaths2536;
}

const HeavyComponent2536 = memo(function HeavyComponent2536({ config }: HeavyProps2536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2536.displayName = 'HeavyComponent2536';
export default HeavyComponent2536;
