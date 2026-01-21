'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4404<T> = T extends (infer U)[]
  ? DeepReadonlyArray4404<U>
  : T extends object
  ? DeepReadonlyObject4404<T>
  : T;

interface DeepReadonlyArray4404<T> extends ReadonlyArray<DeepReadonly4404<T>> {}

type DeepReadonlyObject4404<T> = {
  readonly [P in keyof T]: DeepReadonly4404<T[P]>;
};

type UnionToIntersection4404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4404<T> = UnionToIntersection4404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4404<T extends unknown[], V> = [...T, V];

type TuplifyUnion4404<T, L = LastOf4404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4404<TuplifyUnion4404<Exclude<T, L>>, L>;

type DeepPartial4404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4404<T[P]> }
  : T;

type Paths4404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4404<K, Paths4404<T[K], Prev4404[D]>> : never }[keyof T]
  : never;

type Prev4404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4404 {
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

type ConfigPaths4404 = Paths4404<NestedConfig4404>;

interface HeavyProps4404 {
  config: DeepPartial4404<NestedConfig4404>;
  path?: ConfigPaths4404;
}

const HeavyComponent4404 = memo(function HeavyComponent4404({ config }: HeavyProps4404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4404.displayName = 'HeavyComponent4404';
export default HeavyComponent4404;
