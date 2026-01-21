'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly422<T> = T extends (infer U)[]
  ? DeepReadonlyArray422<U>
  : T extends object
  ? DeepReadonlyObject422<T>
  : T;

interface DeepReadonlyArray422<T> extends ReadonlyArray<DeepReadonly422<T>> {}

type DeepReadonlyObject422<T> = {
  readonly [P in keyof T]: DeepReadonly422<T[P]>;
};

type UnionToIntersection422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf422<T> = UnionToIntersection422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push422<T extends unknown[], V> = [...T, V];

type TuplifyUnion422<T, L = LastOf422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push422<TuplifyUnion422<Exclude<T, L>>, L>;

type DeepPartial422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial422<T[P]> }
  : T;

type Paths422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join422<K, Paths422<T[K], Prev422[D]>> : never }[keyof T]
  : never;

type Prev422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig422 {
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

type ConfigPaths422 = Paths422<NestedConfig422>;

interface HeavyProps422 {
  config: DeepPartial422<NestedConfig422>;
  path?: ConfigPaths422;
}

const HeavyComponent422 = memo(function HeavyComponent422({ config }: HeavyProps422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent422.displayName = 'HeavyComponent422';
export default HeavyComponent422;
