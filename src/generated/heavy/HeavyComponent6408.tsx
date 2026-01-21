'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6408<T> = T extends (infer U)[]
  ? DeepReadonlyArray6408<U>
  : T extends object
  ? DeepReadonlyObject6408<T>
  : T;

interface DeepReadonlyArray6408<T> extends ReadonlyArray<DeepReadonly6408<T>> {}

type DeepReadonlyObject6408<T> = {
  readonly [P in keyof T]: DeepReadonly6408<T[P]>;
};

type UnionToIntersection6408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6408<T> = UnionToIntersection6408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6408<T extends unknown[], V> = [...T, V];

type TuplifyUnion6408<T, L = LastOf6408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6408<TuplifyUnion6408<Exclude<T, L>>, L>;

type DeepPartial6408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6408<T[P]> }
  : T;

type Paths6408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6408<K, Paths6408<T[K], Prev6408[D]>> : never }[keyof T]
  : never;

type Prev6408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6408 {
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

type ConfigPaths6408 = Paths6408<NestedConfig6408>;

interface HeavyProps6408 {
  config: DeepPartial6408<NestedConfig6408>;
  path?: ConfigPaths6408;
}

const HeavyComponent6408 = memo(function HeavyComponent6408({ config }: HeavyProps6408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6408.displayName = 'HeavyComponent6408';
export default HeavyComponent6408;
