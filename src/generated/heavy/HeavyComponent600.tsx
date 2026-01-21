'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly600<T> = T extends (infer U)[]
  ? DeepReadonlyArray600<U>
  : T extends object
  ? DeepReadonlyObject600<T>
  : T;

interface DeepReadonlyArray600<T> extends ReadonlyArray<DeepReadonly600<T>> {}

type DeepReadonlyObject600<T> = {
  readonly [P in keyof T]: DeepReadonly600<T[P]>;
};

type UnionToIntersection600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf600<T> = UnionToIntersection600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push600<T extends unknown[], V> = [...T, V];

type TuplifyUnion600<T, L = LastOf600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push600<TuplifyUnion600<Exclude<T, L>>, L>;

type DeepPartial600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial600<T[P]> }
  : T;

type Paths600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join600<K, Paths600<T[K], Prev600[D]>> : never }[keyof T]
  : never;

type Prev600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig600 {
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

type ConfigPaths600 = Paths600<NestedConfig600>;

interface HeavyProps600 {
  config: DeepPartial600<NestedConfig600>;
  path?: ConfigPaths600;
}

const HeavyComponent600 = memo(function HeavyComponent600({ config }: HeavyProps600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent600.displayName = 'HeavyComponent600';
export default HeavyComponent600;
