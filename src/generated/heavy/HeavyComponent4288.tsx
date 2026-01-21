'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4288<T> = T extends (infer U)[]
  ? DeepReadonlyArray4288<U>
  : T extends object
  ? DeepReadonlyObject4288<T>
  : T;

interface DeepReadonlyArray4288<T> extends ReadonlyArray<DeepReadonly4288<T>> {}

type DeepReadonlyObject4288<T> = {
  readonly [P in keyof T]: DeepReadonly4288<T[P]>;
};

type UnionToIntersection4288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4288<T> = UnionToIntersection4288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4288<T extends unknown[], V> = [...T, V];

type TuplifyUnion4288<T, L = LastOf4288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4288<TuplifyUnion4288<Exclude<T, L>>, L>;

type DeepPartial4288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4288<T[P]> }
  : T;

type Paths4288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4288<K, Paths4288<T[K], Prev4288[D]>> : never }[keyof T]
  : never;

type Prev4288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4288 {
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

type ConfigPaths4288 = Paths4288<NestedConfig4288>;

interface HeavyProps4288 {
  config: DeepPartial4288<NestedConfig4288>;
  path?: ConfigPaths4288;
}

const HeavyComponent4288 = memo(function HeavyComponent4288({ config }: HeavyProps4288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4288.displayName = 'HeavyComponent4288';
export default HeavyComponent4288;
