'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly106<T> = T extends (infer U)[]
  ? DeepReadonlyArray106<U>
  : T extends object
  ? DeepReadonlyObject106<T>
  : T;

interface DeepReadonlyArray106<T> extends ReadonlyArray<DeepReadonly106<T>> {}

type DeepReadonlyObject106<T> = {
  readonly [P in keyof T]: DeepReadonly106<T[P]>;
};

type UnionToIntersection106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf106<T> = UnionToIntersection106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push106<T extends unknown[], V> = [...T, V];

type TuplifyUnion106<T, L = LastOf106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push106<TuplifyUnion106<Exclude<T, L>>, L>;

type DeepPartial106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial106<T[P]> }
  : T;

type Paths106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join106<K, Paths106<T[K], Prev106[D]>> : never }[keyof T]
  : never;

type Prev106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig106 {
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

type ConfigPaths106 = Paths106<NestedConfig106>;

interface HeavyProps106 {
  config: DeepPartial106<NestedConfig106>;
  path?: ConfigPaths106;
}

const HeavyComponent106 = memo(function HeavyComponent106({ config }: HeavyProps106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent106.displayName = 'HeavyComponent106';
export default HeavyComponent106;
