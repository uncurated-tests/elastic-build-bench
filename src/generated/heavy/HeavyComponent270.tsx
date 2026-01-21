'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly270<T> = T extends (infer U)[]
  ? DeepReadonlyArray270<U>
  : T extends object
  ? DeepReadonlyObject270<T>
  : T;

interface DeepReadonlyArray270<T> extends ReadonlyArray<DeepReadonly270<T>> {}

type DeepReadonlyObject270<T> = {
  readonly [P in keyof T]: DeepReadonly270<T[P]>;
};

type UnionToIntersection270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf270<T> = UnionToIntersection270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push270<T extends unknown[], V> = [...T, V];

type TuplifyUnion270<T, L = LastOf270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push270<TuplifyUnion270<Exclude<T, L>>, L>;

type DeepPartial270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial270<T[P]> }
  : T;

type Paths270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join270<K, Paths270<T[K], Prev270[D]>> : never }[keyof T]
  : never;

type Prev270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig270 {
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

type ConfigPaths270 = Paths270<NestedConfig270>;

interface HeavyProps270 {
  config: DeepPartial270<NestedConfig270>;
  path?: ConfigPaths270;
}

const HeavyComponent270 = memo(function HeavyComponent270({ config }: HeavyProps270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent270.displayName = 'HeavyComponent270';
export default HeavyComponent270;
